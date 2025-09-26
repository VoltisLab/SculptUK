'use client';

import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

interface BusinessSettings {
    businessName: string;
    tagline: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    socialMedia: {
        instagram: string;
        facebook: string;
        twitter: string;
        pinterest: string;
    };
}

interface AdminProfile {
    name: string;
    email: string;
    role: string;
    avatar: string;
}

const SettingsAdmin: React.FC = () => {
    const [adminProfile, setAdminProfile] = useState<AdminProfile>({
        name: 'Sarah Johnson',
        email: 'sarah@sculptbyuk.com',
        role: 'Administrator',
        avatar: ''
    });

    const handleProfileSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving profile settings:', adminProfile);
        alert('Profile settings saved successfully!');
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">User Settings</h1>
                <p className="text-gray-600">Manage your admin profile and account settings</p>
            </div>

            <div className="max-w-4xl">
                <form onSubmit={handleProfileSave} className="space-y-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Admin Profile</h2>
                        
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                                        {adminProfile.avatar ? (
                                            <img src={adminProfile.avatar} alt="Avatar" className="h-20 w-20 rounded-full object-cover" />
                                        ) : (
                                            <span className="text-2xl text-gray-500">
                                                {adminProfile.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Avatar URL
                                    </label>
                                    <input
                                        type="url"
                                        value={adminProfile.avatar}
                                        onChange={(e) => setAdminProfile(prev => ({ ...prev, avatar: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="https://example.com/avatar.jpg"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={adminProfile.name}
                                        onChange={(e) => setAdminProfile(prev => ({ ...prev, name: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={adminProfile.email}
                                        onChange={(e) => setAdminProfile(prev => ({ ...prev, email: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Role
                                </label>
                                <select
                                    value={adminProfile.role}
                                    onChange={(e) => setAdminProfile(prev => ({ ...prev, role: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="Administrator">Administrator</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Editor">Editor</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Security & Preferences</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Password</h3>
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    onClick={() => alert('Password change functionality would be implemented here')}
                                >
                                    Change Password
                                </button>
                                <p className="text-xs text-gray-500 mt-1">Last changed: Never</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Account Activity</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>Last login: Today at 10:30 AM</p>
                                    <p>Login sessions: 1 active session</p>
                                    <p>Account created: January 15, 2024</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Notifications</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-900">Email notifications</p>
                                            <p className="text-xs text-gray-500">Receive email alerts for new appointments</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-900">Weekly reports</p>
                                            <p className="text-xs text-gray-500">Get weekly summary reports via email</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Danger Zone</h3>
                                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                                    <div className="flex items-start">
                                        <div className="ml-3">
                                            <h4 className="text-sm font-medium text-red-800">Delete Account</h4>
                                            <p className="text-sm text-red-700 mt-1">
                                                Permanently delete your admin account and all associated data. This action cannot be undone.
                                            </p>
                                            <button
                                                type="button"
                                                className="mt-3 px-3 py-2 text-xs font-medium text-red-700 bg-red-100 border border-red-300 rounded-md hover:bg-red-200"
                                                onClick={() => alert('Account deletion would require additional security verification')}
                                            >
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Save Profile Settings
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default SettingsAdmin;