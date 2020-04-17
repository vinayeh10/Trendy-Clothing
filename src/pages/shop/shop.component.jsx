import React from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(({ id, ...otheProps }) => (
                        <CollectionPreview key={id} {...otheProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage