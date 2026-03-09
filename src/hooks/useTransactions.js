import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'groww_balance_transactions';
const CUTOFF_BEFORE_DATE = new Date('2026-03-04'); // Only show transactions before 4 March

// Get last N weekdays before March 4, going backwards (4, 3, 2, 27, 26...)
const getWeekdayDatesBeforeCutoff = (count) => {
  const dates = [];
  const d = new Date(CUTOFF_BEFORE_DATE);
  d.setDate(d.getDate() - 1); // Start from 3 March
  d.setHours(10, 30, 0, 0);
  while (dates.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      dates.push(new Date(d));
    }
    d.setDate(d.getDate() - 1);
  }
  return dates;
};

const generateSampleTransactions = () => {
  const weekdayDates = getWeekdayDatesBeforeCutoff(15);
  const amounts = [
    { type: 'credit', amount: 50000 },
    { type: 'credit', amount: 25000.50 },
    { type: 'debit', amount: 10000 },
    { type: 'credit', amount: 75000 },
    { type: 'debit', amount: 15000.25 },
    { type: 'credit', amount: 100000 },
    { type: 'credit', amount: 35000 },
    { type: 'debit', amount: 20000 },
    { type: 'credit', amount: 45000.75 },
    { type: 'credit', amount: 60000 },
    { type: 'debit', amount: 25000 },
    { type: 'credit', amount: 90000 },
    { type: 'credit', amount: 15000 },
    { type: 'debit', amount: 18000.50 },
    { type: 'credit', amount: 55000 },
  ];
  return weekdayDates.map((date, i) => {
    const item = amounts[i] || amounts[0];
    return {
      id: i + 1,
      ...item,
      date: date.toISOString(),
      status: 'completed',
      description: item.type === 'credit' ? 'Add money' : 'Withdrawal',
      bankAccount: 'STATE BANK OF INDIA ....1640',
    };
  });
};

// Get transactions from localStorage
const getStoredTransactions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Save transactions to localStorage
const saveTransactions = (transactions) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let stored = getStoredTransactions();
    const realTx = stored.filter((t) => t.id > 1000000000000);
    const sampleTx = stored.filter((t) => t.id <= 1000000000000);
    const cutoffTime = CUTOFF_BEFORE_DATE.getTime();

    // Replace samples that are on/after March 4 with samples before March 4 (keep real tx in storage)
    const invalidSamples = sampleTx.filter((t) => new Date(t.date).getTime() >= cutoffTime);
    if (invalidSamples.length > 0 || sampleTx.length === 0) {
      const newSamples = generateSampleTransactions();
      stored = [...realTx, ...newSamples].sort((a, b) => new Date(b.date) - new Date(a.date));
      saveTransactions(stored);
    }
    setTransactions(stored);
  }, []);

  const addTransaction = useCallback((transaction) => {
    const newTx = {
      id: Date.now(),
      date: new Date().toISOString(),
      bankAccount: 'STATE BANK OF INDIA ....1640',
      ...transaction,
    };
    const updated = [newTx, ...getStoredTransactions()];
    saveTransactions(updated);
    setTransactions(updated);
    return newTx;
  }, []);

  // Get transactions from last N months, ONLY before 4 March
  const getTransactionsByMonths = useCallback((months = 1) => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    const minCutoff = date.getTime();
    const maxCutoff = CUTOFF_BEFORE_DATE.getTime();
    return transactions.filter((tx) => {
      const txTime = new Date(tx.date).getTime();
      return txTime >= minCutoff && txTime < maxCutoff;
    });
  }, [transactions]);

  return { transactions: getTransactionsByMonths(1), getTransactionsByMonths, addTransaction, allTransactions: transactions };
};
