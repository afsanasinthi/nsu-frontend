import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
const OnSelectResetsInput = () => {
    return (
        <div>
            <Multiselect
                isObject={false}
                onKeyPressFn={function noRefCheck() { }}
                onRemove={function noRefCheck() { }}
                onSearch={function noRefCheck() { }}
                onSelect={function noRefCheck() { }}
                options={[
                    'Option 1',
                    'Option 2',
                    'Option 3',
                    'Option 4',
                    'Option 5'
                ]}
            />
        </div>
    );
};

export default OnSelectResetsInput;