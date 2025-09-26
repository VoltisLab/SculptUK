'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/admin/AdminLayout';

interface ServiceFormData {
    title: string;
    description: string;
    image: string;
    features: string[];
    status: 'active' | 'draft';
}

const EditService: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const serviceId = params.id as string;
    
    const [formData, setFormData] = useState<ServiceFormData>({
        title: '',
        description: '',
        image: '',
        features: [],
        status: 'active'
    });
    const [currentFeature, setCurrentFeature] = useState('');
    const [loading, setLoading] = useState(true);

    // Mock data for services - in real app this would come from database
    const mockServices = {
        '1': {
            title: 'Facial Balancing',
            description: 'Advanced techniques to harmonize and enhance your natural facial features with precision and artistry.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/o4lgbuq7_548618488_18075513953481582_4540073863437101175_n.jpg',
            features: ['Dermal Fillers', 'Cheek Enhancement', 'Jawline Contouring', 'Lip Enhancement'],
            status: 'active' as const
        },
        '2': {
            title: 'Non-Surgical Enhancements',
            description: 'Revolutionary treatments that deliver exceptional results without invasive procedures or lengthy recovery times.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/tttuu4a0_548698576_17881107792389543_84542946011862593_n.jpg',
            features: ['Thread Lifts', 'Skin Boosters', 'Anti-Wrinkle Injections', 'Profile Enhancement'],
            status: 'active' as const
        },
        '3': {
            title: 'Toxin Treatments',
            description: 'Expertly administered neurotoxin treatments for facial rejuvenation and natural-looking results.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/j2anapdm_546613438_17880927918389543_2874396220693872092_n.jpg',
            features: ['Forehead Lines', 'Crow\'s Feet', 'Frown Lines', 'Facial Slimming'],
            status: 'active' as const
        },
        '4': {
            title: 'Skin Rejuvenation',
            description: 'Restore your skin\'s natural radiance with advanced treatments and cutting-edge technology.',
            image: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/k08h122u_SnapInsta.to_551660069_17881765080389543_3685001505789523181_n.jpg',
            features: ['Chemical Peels', 'Microneedling', 'PRP Therapy', 'Laser Treatments'],
            status: 'active' as const
        }
    };

    useEffect(() => {
        // Load service data
        const service = mockServices[serviceId as keyof typeof mockServices];
        if (service) {
            setFormData(service);
        }
        setLoading(false);
    }, [serviceId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save to database
        console.log('Updating service:', serviceId, formData);
        alert('Service updated successfully!');
        router.push('/admin/services');
    };

    const addFeature = () => {
        if (currentFeature.trim() && !formData.features.includes(currentFeature.trim())) {
            setFormData(prev => ({
                ...prev,
                features: [...prev.features, currentFeature.trim()]
            }));
            setCurrentFeature('');
        }
    };

    const removeFeature = (index: number) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index)
        }));
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">Edit Service</h1>
                <p className="text-gray-600">Modify service details and settings</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Service Details</h2>
                        
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="e.g., Facial Balancing"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Detailed description of the service..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image URL *
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={formData.image}
                                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="https://example.com/image.jpg"
                                />
                                {formData.image && (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                                        <img 
                                            src={formData.image} 
                                            alt="Service preview" 
                                            className="w-full max-w-md h-48 object-cover rounded-md border"
                                            onError={(e) => {
                                                e.currentTarget.src = '/placeholder-image.png';
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Features
                                </label>
                                <div className="flex space-x-2 mb-3">
                                    <input
                                        type="text"
                                        value={currentFeature}
                                        onChange={(e) => setCurrentFeature(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., Dermal Fillers"
                                    />
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                                        >
                                            {feature}
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="ml-2 text-gray-400 hover:text-gray-600"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'active' | 'draft' }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => router.push('/admin/services')}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Update Service
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditService;