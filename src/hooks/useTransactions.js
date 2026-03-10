import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'groww_balance_transactions';
const SAMPLE_VERSION = 7; // Update 897746.78 to 3597746.78
const CUTOFF_BEFORE_DATE = new Date('2026-02-03'); // Last date before 4 Feb (weekday)
const CUTOFF_END_DATE = new Date('2026-03-01'); // Include through Feb

// Static pending withdrawal - 04 Feb 2026
const STATIC_PENDING_WITHDRAWAL = {
  id: 'static-pending-001',
  type: 'debit',
  amount: 100000, // ₹1 lakh
  date: '2026-02-04T10:30:00.000Z',
  status: 'pending',
  description: 'Withdrawal',
  bankAccount: 'IDBI Bank ....1981',
};

// Get last N weekdays before 28 Feb, going backwards (27, 26, 25...)
const getWeekdayDatesBeforeCutoff = (count) => {
  const dates = [];
  const d = new Date(CUTOFF_BEFORE_DATE);
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
  const weekdayDates = getWeekdayDatesBeforeCutoff(22); // ~1 month of weekdays (Jan 4 - Feb 3)
  const amounts = [
    { type: 'debit', amount: 450074.50 },
    { type: 'credit', amount: 1569887.67 },
    { type: 'credit', amount: 1156843.78 },
    { type: 'credit', amount: 3597746.78 },
    { type: 'credit', amount: 786654.87 },
    { type: 'credit', amount: 34607.85 },
    { type: 'credit', amount: 523456.12 },
    { type: 'debit', amount: 289450.90 },
    { type: 'credit', amount: 1123456.45 },
    { type: 'credit', amount: 678234.56 },
    { type: 'debit', amount: 156789.34 },
    { type: 'credit', amount: 934567.89 },
    { type: 'credit', amount: 445678.23 },
    { type: 'debit', amount: 234567.12 },
    { type: 'credit', amount: 789012.67 },
    { type: 'credit', amount: 567890.34 },
    { type: 'debit', amount: 123456.78 },
    { type: 'credit', amount: 891234.56 },
    { type: 'credit', amount: 345678.90 },
    { type: 'debit', amount: 178945.23 },
    { type: 'credit', amount: 612345.78 },
  ];
  return weekdayDates.map((date, i) => {
    const item = amounts[i] || amounts[0];
    return {
      id: i + 1,
      ...item,
      date: date.toISOString(),
      status: 'completed',
      description: item.type === 'credit' ? 'Add money' : 'Withdrawal',
      bankAccount: 'IDBI Bank ....1981',
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
    const sampleTx = stored.filter((t) => t.id <= 1000000000000 || t.id === 'static-pending-001');
    const cutoffTime = CUTOFF_BEFORE_DATE.getTime();
    const storedVersion = parseInt(localStorage.getItem(STORAGE_KEY + '_v') || '0', 10);

    // Replace invalid samples or when version changes (Feb dates, lakh amounts)
    const invalidSamples = sampleTx.filter((t) => t.id !== 'static-pending-001' && new Date(t.date).getTime() >= cutoffTime);
    const hasStaticPending = stored.some((t) => t.id === 'static-pending-001');
    if (invalidSamples.length > 0 || sampleTx.length === 0 || !hasStaticPending || storedVersion < SAMPLE_VERSION) {
      const newSamples = generateSampleTransactions();
      const others = realTx.concat(newSamples).filter((t) => t.id !== 'static-pending-001');
      stored = [STATIC_PENDING_WITHDRAWAL, ...others].sort((a, b) => new Date(b.date) - new Date(a.date));
      saveTransactions(stored);
      localStorage.setItem(STORAGE_KEY + '_v', String(SAMPLE_VERSION));
    }
    setTransactions(stored);
  }, []);

  const addTransaction = useCallback((transaction) => {
    const newTx = {
      id: Date.now(),
      date: new Date().toISOString(),
      bankAccount: 'IDBI Bank ....1981',
      ...transaction,
    };
    const updated = [newTx, ...getStoredTransactions()];
    saveTransactions(updated);
    setTransactions(updated);
    return newTx;
  }, []);

  // Get transactions from last N months, include up to end of Feb
  const getTransactionsByMonths = useCallback((months = 2) => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    const minCutoff = date.getTime();
    const maxCutoff = CUTOFF_END_DATE.getTime(); // Include 4 March
    return transactions.filter((tx) => {
      const txTime = new Date(tx.date).getTime();
      return txTime >= minCutoff && txTime < maxCutoff;
    });
  }, [transactions]);

  return { transactions: getTransactionsByMonths(2), getTransactionsByMonths, addTransaction, allTransactions: transactions };
};
