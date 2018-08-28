import React from 'react';
import Breadcrumbs from 'react-slds/components/Breadcrumbs';
import Breadcrumb from 'react-slds/components/Breadcrumb';

export default function ButtonExample() {
    return (
        <div>
            <Breadcrumbs>
                <Breadcrumb label="Parent entity" onClick={() => alert('Breadcrumb was clicked')} />
                <Breadcrumb label="Parent record name" />
            </Breadcrumbs>
        </div>
    );
}