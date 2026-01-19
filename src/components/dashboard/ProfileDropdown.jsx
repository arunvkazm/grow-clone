import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiSettings, 
  FiCreditCard, 
  FiFileText, 
  FiHeadphones, 
  FiSun, 
  FiLogOut,
  FiChevronRight
} from 'react-icons/fi';
import { MdAccountBalance } from 'react-icons/md';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
    setIsOpen(false);
  };

  const maskEmail = (email) => {
    if (!email) return 'wasim@market.com';
    // Show full email without masking (as per screenshot)
    return email;
  };

  const menuItems = [
    { 
      icon: FiCreditCard, 
      label: 'Stocks, F&O balance', 
      balance: '₹12,80,00,00,000',
      onClick: () => navigate('/balance')
    },
    { 
      icon: FiFileText, 
      label: 'All Orders', 
      onClick: () => navigate('/orders')
    },
    { 
      icon: MdAccountBalance, 
      label: 'Bank Details', 
      onClick: () => {}
    },
    { 
      icon: FiHeadphones, 
      label: '24 x 7 Customer Support', 
      onClick: () => {}
    },
    { 
      icon: FiFileText, 
      label: 'Reports', 
      onClick: () => navigate('/reports')
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-600 transition-colors"
      >
        <span className="text-white text-sm font-semibold">
          {(user?.name || 'Wasim Anish Khan').charAt(0).toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-100 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-gray-900 leading-tight">{user?.name || 'Wasim Anish Khan'}</p>
              <p className="text-xs text-gray-500 mt-1 truncate">{maskEmail(user?.email || 'wasim@market.com')}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-2 flex-shrink-0">
              <FiSettings className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-3">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              return (
                <React.Fragment key={index}>
                  <button
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 flex items-center hover:bg-gray-50 transition-colors text-left"
                  >
                    <Icon className="h-5 w-5 text-gray-600 flex-shrink-0 mr-3" />
                    <div className="flex-1 min-w-0">
                      {item.balance && (
                        <p className="text-xs text-gray-500 mb-0.5 leading-tight">{item.balance}</p>
                      )}
                      <p className="text-sm font-medium text-gray-900 leading-tight">{item.label}</p>
                    </div>
                    <FiChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-auto" />
                  </button>
                  {!isLast && <hr className="my-2 border-gray-200" />}
                </React.Fragment>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiSun className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-700 hover:text-gray-900 underline"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

