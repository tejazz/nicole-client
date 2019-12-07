import React, { StatelessComponent } from 'react';
import Select from '../../../assets/images/select.svg';
import './ToggleItem.scss';

interface ToggleItemProps {
    handleFilterChange: Function;
    FilterType: string;
    FilterSubType: string;
    Label: string;
    FilterTypeValue: boolean;
}

export const ToggleItem: StatelessComponent<ToggleItemProps> = (props) => {
    return (
        <div
            className="ToggleItem"
            onClick={() => props.handleFilterChange(props.FilterType, props.FilterSubType)}
        >
            <img
                src={Select}
                alt="select__icon"
                className={(props.FilterTypeValue) ? "SelectIcon" : "SelectIcon SelectIcon--Hide"}
            />
            <p className="SiteLabel">{props.Label}</p>
        </div>
    );
}; 