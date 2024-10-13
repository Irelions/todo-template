import React, {Component} from "react";
import './tasks-filter.css';

import Filter from "../filter";

export default class TasksFilter extends Component {
    state = {
        filters: [
            {id: 'all', label: 'All', isActive: true},
            {id: 'active', label: 'Active', isActive: false},
            {id: 'completed', label: 'Completed', isActive: false},
        ]
    };

    updateActiveFilter = (filterId) => {
        this.setState(({filters}) => {
            const indexActiveFilter = filters.findIndex(filter => filter.id === filterId);
            const newArrayFilters = filters.map((filter) => {
                filter.isActive = false;
                return filter;
            });
            newArrayFilters[indexActiveFilter].isActive = true;
            return {
                filters: newArrayFilters,
            };
        });
    }

    render() {
        const {setActiveFilter} = this.props;
        const {filters} = this.state;
        return (
            <ul className='filters'>
                {filters.map(filter => {
                    return (
                        <li key={filter.id}>
                            <Filter filter={filter}
                                    setActiveFilter={(filterId) => {
                                        this.updateActiveFilter(filterId);
                                        setActiveFilter(filterId);
                                    }
                            }
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}