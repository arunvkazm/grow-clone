import { useState } from "react";
import profileimage from "../assets/profile.jpeg";
import { useAuth } from "../hooks/useAuth";
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import { Link } from "react-router-dom";
import { FiSearch, FiBell, FiChevronDown, FiCalendar, FiChevronRight } from 'react-icons/fi';

export default function ReportsPage() {
    const [fromDate, setFromDate] = useState("2025-04-01");
    const [toDate, setToDate] = useState("2026-03-19");
    const [selectedReport, setSelectedReport] = useState("F&O P&L");

    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [showMoreMenu, setShowMoreMenu] = useState(false);

    const profileMenu = [
        "Basic Details",
        "Reports",
        "Change Password",
        "Trading Controls",
        "Trading APIs",
        "Sell authorization mode",
        "Trading Details",
        "Account Related Forms",
        "Nominee Details",
        "Active Devices",
        "Report suspicious activity",
    ];

    const taxReports = [
        "Mutual Funds - ELSS statement",
        "Mutual Funds - Capital Gains",
        "Stocks - Capital Gains",
        "F&O - Tax Report",
        "Commodities - Tax Report",
        "GST invoice"
    ];
    const holdingsReports = [
        "Mutual Funds - Holdings statement",
        "Stocks - Holding statement",
        "Demat report",
        "CMR copy"
    ];

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 overflow-visible">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-16 flex items-center justify-between">
                        <div className="flex items-center space-x-6 flex-1">
                            <GrowwLogo size="md" showStocks={true} />

                            <nav className="hidden md:flex items-center space-x-6">
                                <Link to="/stocks" className="text-sm font-medium text-gray-700 hover:text-gray-900">Stocks</Link>
                                <Link to="/futures-and-options" className="text-sm font-medium text-gray-700 hover:text-gray-900">F&O</Link>
                                <Link to="/mutual-funds" className="text-sm font-medium text-gray-700 hover:text-gray-900">Mutual Funds</Link>

                                <div
                                    className="relative"
                                    onMouseEnter={() => setShowMoreMenu(true)}
                                    onMouseLeave={() => setShowMoreMenu(false)}
                                >
                                    <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center space-x-1">
                                        <span>More</span>
                                        <FiChevronDown className="h-4 w-4" />
                                    </button>

                                    {showMoreMenu && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                            <Link to="/ipos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">IPOs</Link>
                                            <Link to="/bonds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bonds</Link>
                                            <Link to="/commodities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Commodities</Link>
                                        </div>
                                    )}
                                </div>
                            </nav>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex relative">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search Groww..."
                                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                                <FiBell className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                                    4
                                </span>
                            </button>

                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* ✅ UPDATED GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                    {/* LEFT (wider now) */}
                    <div className="md:col-span-3 border border-gray-300 rounded-md overflow-hidden h-fit">
                        <div className="flex flex-col items-center py-5 border-b border-gray-300">
                            <img src={profileimage} alt="avatar" className="w-40 h-40 rounded-full mb-3" />
                            <h2 className="text-lg font-semibold">Wasim Anish Khan</h2>
                        </div>

                        <div>
                            {profileMenu?.map((item) => (
                                <div
                                    key={item}
                                    className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${item === "Reports" ? "font-semibold text-black" : "text-gray-600"
                                        }`}
                                >
                                    <span>{item}</span>
                                    <FiChevronRight size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE (main focus) */}
                    <div className="md:col-span-6 space-y-6">
                        <div className="border border-gray-300 rounded-md overflow-hidden">
                            <h3 className="font-semibold border-b border-gray-300 px-4 py-3">
                                Profit & Loss
                            </h3>

                            {["Stocks P&L", "F&O P&L", "Dividend Report"].map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelectedReport(item)}
                                    className={`flex justify-between items-center px-4 py-3 cursor-pointer ${selectedReport === item ? "bg-green-100" : "bg-white"
                                        } hover:bg-gray-100`}
                                >
                                    <span>{item}</span>
                                    <FiChevronRight size={18} />
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-300 rounded-md overflow-hidden">
                            <h3 className="font-semibold border-b border-gray-300 px-4 py-3">
                                Tax
                            </h3>

                            {taxReports?.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelectedReport(item)}
                                    className="flex justify-between items-center px-4 py-3 ml-3 cursor-pointer border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <span>{item}</span>
                                    <FiChevronRight size={18} />
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-300 rounded-md overflow-hidden">
                            <h3 className="font-semibold border-b border-gray-300 px-4 py-3">
                                Holdings
                            </h3>

                            {holdingsReports?.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelectedReport(item)}
                                    className="flex justify-between items-center px-4 py-3 ml-3 cursor-pointer border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <span>{item}</span>
                                    <FiChevronRight size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT (wider now) */}
                    <div className="md:col-span-3 rounded-md flex flex-col justify-between h-fit">
                        <div className="border border-gray-300">
                            <div>
                                <h3 className="font-semibold border-b border-gray-300 px-4 py-3">
                                    {selectedReport}
                                </h3>
                                <div className="p-4">
                                    <div className="mb-4">
                                        <label className="block text-sm text-gray-500 mb-1">
                                            Financial Year
                                        </label>
                                        <select className="w-full border border-gray-300 rounded-md p-2">
                                            <option>Apr 2025 - Mar 2026</option>
                                            <option>Apr 2024 - Mar 2025</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-sm text-gray-500">From</label>
                                            <div className="flex items-center border border-gray-300 rounded-md px-2 py-2">
                                                <input
                                                    type="date"
                                                    value={fromDate}
                                                    onChange={(e) => setFromDate(e.target.value)}
                                                    className="w-full outline-none text-sm"
                                                />
                                                <FiCalendar size={16} />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm text-gray-500">To</label>
                                            <div className="flex items-center border border-gray-300 rounded-md px-2 py-2">
                                                <input
                                                    type="date"
                                                    value={toDate}
                                                    onChange={(e) => setToDate(e.target.value)}
                                                    className="w-full outline-none text-sm"
                                                />
                                                <FiCalendar size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-300">
                                <button className="w-full py-3 text-sm font-medium rounded-md bg-primary-600 text-white hover:bg-primary-700">
                                    View
                                </button>
                            </div>
                        </div>
                        <button className="w-full mt-4 flex items-center justify-between text-sm text-gray-600 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50">
                            <span>Need help?</span>
                            <FiChevronRight size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
