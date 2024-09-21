"use client"
import { useState } from 'react';
import SenderInfoForm from './components/SenderInfoForm';
import CustomerInfoForm from './components/CustomerInfoForm';
import ShipmentDetailsForm from './components/ShipmentDetailsForm';
import Tabs from './components/Tabs';
import MainLayout from '@/layout/MainLayout';
import { Header } from '@/components/Header';
import ShippingMethodForm from './components/ShippingMethodForm';
import VehicleInfoForm from './components/VehicleInfoForm';
import BillingAddressForm from './components/BillingAddressForm';
import ShippingAddressForm from './components/ShippingAddressForm';

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = ['Shipment Address', 'Billing Address', 'Vehicle Info', 'Dealer Info'];

    const renderForm = () => {
        switch (activeTab) {
            case 0:
                return <ShippingAddressForm />;
            case 1:
                return <BillingAddressForm />;
            case 2:
                return <VehicleInfoForm />;
            case 3:
                return <SenderInfoForm />;
            case 4:
                return <CustomerInfoForm />;
            case 5:
                return <ShippingMethodForm />;
            case 6:
                return <ShipmentDetailsForm />;
            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-700">
                <Header />
            </div>
            <div className="max-w-3xl mx-auto md:my-8">
                <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
                <div className="mt-4">
                    {renderForm()}
                </div>
            </div>
        </MainLayout>
    );
};

export default Page;
