'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/admin/AdminLayout';

interface ImageFormData {
    title: string;
    description: string;
    url: string;
    category: string;
    status: 'active' | 'draft';
}

const EditImage: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const imageId = params.id as string;
    
    const [formData, setFormData] = useState<ImageFormData>({
        title: '',
        description: '',
        url: '',
        category: 'facial-treatments',
        status: 'active'
    });
    const [loading, setLoading] = useState(true);

    // Mock data for images - in real app this would come from database
    const mockImages = {
        '1': {
            title: 'Facial Enhancement Treatment',
            description: 'Professional facial balancing and contouring procedure',
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ihloolf0_SnapInsta.to_551071066_17881781061389543_540253133835019875_n%20%281%29.jpg',
            category: 'facial-treatments',
            status: 'active' as const
        },
        '2': {
            title: 'Advanced Aesthetic Procedure',
            description: 'Expert application of dermal fillers for natural enhancement',
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/8mgyab49_SnapInsta.to_551071066_17881781061389543_540253133835019875_n.jpg',
            category: 'facial-treatments',
            status: 'active' as const
        },
        '3': {
            title: 'Precision Treatment',
            description: 'Detailed aesthetic enhancement with professional precision',
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/ab6099j8_SnapInsta.to_551485792_17881805115389543_3605467977758722625_n.jpg',
            category: 'procedures',
            status: 'active' as const
        },
        '4': {
            title: 'Professional Care',
            description: 'Expert hands delivering exceptional aesthetic results',
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/prqp1vtj_SnapInsta.to_551056968_17881765797389543_2910706867156139896_n.jpg',
            category: 'procedures',
            status: 'active' as const
        },
        '5': {
            title: 'Aesthetic Excellence',
            description: 'State-of-the-art facial enhancement techniques',
            url: 'https://customer-assets.emergentagent.com/job_clinic-replica-2/artifacts/s462sjsw_SnapInsta.to_552081996_17881765785389543_5482520383614813895_n.jpg',
            category: 'facial-treatments',
            status: 'draft' as const
        }
    };

    const categories = [
        { id: 'facial-treatments', label: 'Facial Treatments' },
        { id: 'procedures', label: 'Procedures' },
        { id: 'consultations', label: 'Consultations' },
        { id: 'clinic-spaces', label: 'Our Clinic' }
    ];

    useEffect(() => {
        // Load image data
        const image = mockImages[imageId as keyof typeof mockImages];
        if (image) {
            setFormData(image);
        }
        setLoading(false);
    }, [imageId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save to database
        console.log('Updating image:', imageId, formData);
        alert('Image updated successfully!');
        router.push('/admin/gallery');
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
                <h1 className="text-3xl font-light text-gray-900 mb-2">Edit Gallery Image</h1>
                <p className="text-gray-600">Modify image details and settings</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Image Details</h2>
                        
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="e.g., Facial Enhancement Treatment"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Brief description of the image..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image URL *
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={formData.url}
                                    onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="https://example.com/image.jpg"
                                />
                                {formData.url && (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                                        <img 
                                            src={formData.url} 
                                            alt="Gallery image preview" 
                                            className="w-full max-w-lg h-64 object-cover rounded-md border"
                                            onError={(e) => {
                                                e.currentTarget.src = '/placeholder-image.png';
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category *
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
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
                                        <option value="active">Active (Visible)</option>
                                        <option value="draft">Draft (Hidden)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => router.push('/admin/gallery')}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Update Image
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditImage;