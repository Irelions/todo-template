import './tasks-filter.css';
import Filter from '../filter';
import PropTypes from 'prop-types';

import { Component } from 'react';

export default class TasksFilter extends Component {
  constructor(props) {
    super(props);
    TasksFilter.defaultProps = {
      setActiveFilter: () => {},
    };
    TasksFilter.propTypes = {
      setActiveFilter: PropTypes.func,
    };

    this.state = {
      filters: [
        { id: 'all', label: 'All', isActive: true },
        { id: 'active', label: 'Active', isActive: false },
        { id: 'completed', label: 'Completed', isActive: false },
      ],
    };

    this.updateActiveFilter = (filterId) => {
      this.setState(({ filters }) => {
        const indexActiveFilter = filters.findIndex((filter) => filter.id === filterId);
        const newArrayFilters = filters.map((filter) => {
          filter.isActive = false;
          return filter;
        });
        newArrayFilters[indexActiveFilter].isActive = true;
        return {
          filters: newArrayFilters,
        };
      });
    };
  }

  render() {
    const { setActiveFilter } = this.props;
    const { filters } = this.state;
    return (
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter.id}>
            <Filter
              filter={filter}
              setActiveFilter={(filterId) => {
                this.updateActiveFilter(filterId);
                setActiveFilter(filterId);
              }}
            />
          </li>
        ))}
      </ul>
    );
  }
}
