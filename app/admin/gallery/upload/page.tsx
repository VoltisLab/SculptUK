'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../../components/admin/AdminLayout';

interface ImageFormData {
    title: string;
    description: string;
    url: string;
    category: string;
    status: 'active' | 'draft';
}

const UploadImage: React.FC = () => {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState<ImageFormData>({
        title: '',
        description: '',
        url: '',
        category: 'facial-treatments',
        status: 'active'
    });
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const categories = [
        { id: 'facial-treatments', label: 'Facial Treatments' },
        { id: 'procedures', label: 'Procedures' },
        { id: 'consultations', label: 'Consultations' },
        { id: 'clinic-spaces', label: 'Our Clinic' }
    ];

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (file: File) => {
        if (file.type.startsWith('image/')) {
            setSelectedFile(file);
            // Create object URL for preview
            const imageUrl = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, url: imageUrl }));
            
            // Auto-generate title from filename
            const fileName = file.name.replace(/\.[^/.]+$/, "");
            const autoTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/[-_]/g, ' ');
            setFormData(prev => ({ ...prev, title: autoTitle }));
        } else {
            alert('Please select a valid image file (JPG, PNG, WebP)');
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploading(true);
        
        try {
            // Simulate upload process
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log('Uploading image:', formData, selectedFile);
            alert('Image uploaded successfully!');
            router.push('/admin/gallery');
        } catch (error) {
            alert('Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const onButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-light text-gray-900 mb-2">Upload New Images</h1>
                <p className="text-gray-600">Add new images to your gallery collection</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Drag and Drop Upload Area */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Upload Image</h2>
                        
                        <div
                            className={`relative border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition-colors ${
                                dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                            }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple={false}
                                accept="image/*"
                                onChange={handleFileInput}
                                className="hidden"
                            />
                            
                            {!formData.url ? (
                                <>
                                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-lg text-gray-600 mb-2">
                                        Drag and drop your image here, or{' '}
                                        <button
                                            type="button"
                                            onClick={onButtonClick}
                                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                                        >
                                            browse files
                                        </button>
                                    </p>
                                    <p className="text-sm text-gray-500">Support for JPG, PNG, WebP up to 5MB</p>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <img 
                                        src={formData.url} 
                                        alt="Preview" 
                                        className="mx-auto max-h-64 rounded-md border"
                                    />
                                    <div className="flex justify-center space-x-3">
                                        <button
                                            type="button"
                                            onClick={onButtonClick}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        >
                                            Change Image
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, url: '' }));
                                                setSelectedFile(null);
                                            }}
                                            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-300 rounded-md hover:bg-red-100"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image Details Form */}
                    {formData.url && (
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
                    )}

                    {/* Upload Guidelines */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-blue-900 mb-4">Upload Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-blue-800 mb-2">Technical Requirements</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Minimum resolution: 1200x800 pixels</li>
                                    <li>• Maximum file size: 5MB</li>
                                    <li>• Supported formats: JPG, PNG, WebP</li>
                                    <li>• Recommended aspect ratio: 4:3 or 16:9</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-800 mb-2">Content Guidelines</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Professional quality images only</li>
                                    <li>• Proper lighting and clear focus</li>
                                    <li>• Client consent for treatment photos</li>
                                    <li>• No personal information visible</li>
                                </ul>
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
                            disabled={!formData.url || uploading}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {uploading ? 'Uploading...' : 'Upload Image'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default UploadImage;