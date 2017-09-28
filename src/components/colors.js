import React from 'react';
import { connect } from 'react-redux';

const Colors = ({ colors }) => {
    return (
        <div>
        {colors.map(color => <h2 key={color} style={{color}}>{color}>{color}></h2>) }
        </div>
    );
};

function mapStateProps({ colors }) {
    return {colors };
}

export default connect(mapStateProps)(Colors);