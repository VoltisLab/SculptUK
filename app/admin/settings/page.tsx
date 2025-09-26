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
    const [activeTab, setActiveTab] = useState<'business' | 'profile' | 'website'>('business');
    const [businessSettings, setBusinessSettings] = useState<BusinessSettings>({
        businessName: 'Sculpt by U.K',
        tagline: 'Luxury Aesthetics. Exceptional Results.',
        description: 'Where beauty meets elegance. We specialise in full facial enhancements without the need for surgery. Our team of specialists will guide and advise you on every step of your journey.',
        address: '123 Aesthetic Lane, Beauty District, London, UK',
        phone: '+44 20 1234 5678',
        email: 'info@sculptbyuk.com',
        website: 'www.sculptbyuk.com',
        socialMedia: {
            instagram: '@sculptbyuk',
            facebook: 'SculptByUK',
            twitter: '@sculptbyuk',
            pinterest: 'sculptbyuk'
        }
    });

    const [adminProfile, setAdminProfile] = useState<AdminProfile>({
        name: 'Sarah Johnson',
        email: 'sarah@sculptbyuk.com',
        role: 'Administrator',
        avatar: ''
    });

    const [websiteSettings, setWebsiteSettings] = useState({
        siteTitle: 'SculptUK - Body Sculpting & Wellness',
        metaDescription: 'Professional body sculpting, wellness treatments and training services',
        favicon: '',
        logo: '',
        primaryColor: '#000000',
        secondaryColor: '#6B7280',
        maintenanceMode: false,
        allowBookings: true,
        showPrices: true,
        enableAnalytics: true
    });

    const handleBusinessSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving business settings:', businessSettings);
        alert('Business settings saved successfully!');
    };

    const handleProfileSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving profile settings:', adminProfile);
        alert('Profile settings saved successfully!');
    };

    const handleWebsiteSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving website settings:', websiteSettings);
        alert('Website settings saved successfully!');
    };

    const tabs = [
        { id: 'business', label: 'Business Info', icon: '🏢' },
        { id: 'profile', label: 'Admin Profile', icon: '👤' },
        { id: 'website', label: 'Website Settings', icon: '⚙️' }
    ];

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-600">Manage your business and website settings</p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === tab.id
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Business Settings */}
            {activeTab === 'business' && (
                <div className="max-w-4xl">
                    <form onSubmit={handleBusinessSave} className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-6">Business Information</h2>
                            
                            <div className="grid grid-cols-1 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={businessSettings.businessName}
                                            onChange={(e) => setBusinessSettings(prev => ({ ...prev, businessName: e.target.value }))}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tagline
                                        </label>
                                        <input
                                            type="text"
                                            value={businessSettings.tagline}
                                            onChange={(e) => setBusinessSettings(prev => ({ ...prev, tagline: e.target.value }))}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Description
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={businessSettings.description}
                                        onChange={(e) => setBusinessSettings(prev => ({ ...prev, description: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Address *
                                    </label>
                                    <textarea
                                        rows={3}
                                        required
                                        value={businessSettings.address}
                                        onChange={(e) => setBusinessSettings(prev => ({ ...prev, address: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={businessSettings.phone}
                                            onChange={(e) => setBusinessSettings(prev => ({ ...prev, phone: e.target.value }))}
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
                                            value={businessSettings.email}
                                            onChange={(e) => setBusinessSettings(prev => ({ ...prev, email: e.target.value }))}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Website
                                        </label>
                                        <input
                                            type="url"
                                            value={businessSettings.website}
                                            onChange={(e) => setBusinessSettings(prev => ({ ...prev, website: e.target.value }))}
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-6">Social Media</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instagram
                                    </label>
                                    <input
                                        type="text"
                                        value={businessSettings.socialMedia.instagram}
                                        onChange={(e) => setBusinessSettings(prev => ({ 
                                            ...prev, 
                                            socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                                        }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="@sculptbyuk"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Facebook
                                    </label>
                                    <input
                                        type="text"
                                        value={businessSettings.socialMedia.facebook}
                                        onChange={(e) => setBusinessSettings(prev => ({ 
                                            ...prev, 
                                            socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                                        }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="SculptByUK"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Twitter
                                    </label>
                                    <input
                                        type="text"
                                        value={businessSettings.socialMedia.twitter}
                                        onChange={(e) => setBusinessSettings(prev => ({ 
                                            ...prev, 
                                            socialMedia: { ...prev.socialMedia, twitter: e.target.value }
                                        }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="@sculptbyuk"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pinterest
                                    </label>
                                    <input
                                        type="text"
                                        value={businessSettings.socialMedia.pinterest}
                                        onChange={(e) => setBusinessSettings(prev => ({ 
                                            ...prev, 
                                            socialMedia: { ...prev.socialMedia, pinterest: e.target.value }
                                        }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="sculptbyuk"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Save Business Settings
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Admin Profile */}
            {activeTab === 'profile' && (
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
                            <h2 className="text-lg font-medium text-gray-900 mb-6">Security</h2>
                            
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Change Password
                                </button>
                                <div className="text-sm text-gray-500">
                                    Last login: Today at 10:30 AM
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
            )}

            {/* Website Settings */}
            {activeTab === 'website' && (
                <div className="max-w-4xl">
                    <form onSubmit={handleWebsiteSave} className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-6">Website Configuration</h2>
                            
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Site Title
                                    </label>
                                    <input
                                        type="text"
                                        value={websiteSettings.siteTitle}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, siteTitle: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Meta Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={websiteSettings.metaDescription}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, metaDescription: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Primary Color
                                        </label>
                                        <input
                                            type="color"
                                            value={websiteSettings.primaryColor}
                                            onChange={(e) => setWebsiteSettings(prev => ({ ...prev, primaryColor: e.target.value }))}
                                            className="block w-full h-10 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Secondary Color
                                        </label>
                                        <input
                                            type="color"
                                            value={websiteSettings.secondaryColor}
                                            onChange={(e) => setWebsiteSettings(prev => ({ ...prev, secondaryColor: e.target.value }))}
                                            className="block w-full h-10 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-6">Website Features</h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Maintenance Mode</h3>
                                        <p className="text-sm text-gray-500">Temporarily disable public access to your website</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={websiteSettings.maintenanceMode}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, maintenanceMode: e.target.checked }))}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Allow Bookings</h3>
                                        <p className="text-sm text-gray-500">Enable appointment booking functionality</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={websiteSettings.allowBookings}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, allowBookings: e.target.checked }))}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Show Prices</h3>
                                        <p className="text-sm text-gray-500">Display service and training prices publicly</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={websiteSettings.showPrices}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, showPrices: e.target.checked }))}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Enable Analytics</h3>
                                        <p className="text-sm text-gray-500">Track website visitor analytics</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={websiteSettings.enableAnalytics}
                                        onChange={(e) => setWebsiteSettings(prev => ({ ...prev, enableAnalytics: e.target.checked }))}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Save Website Settings
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </AdminLayout>
    );
};

export default SettingsAdmin;