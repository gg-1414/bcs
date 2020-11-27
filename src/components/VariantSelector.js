import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    const { activeIndex } = this.props;

    return (
      <div className="Product__options">
        <fieldset>
          {this.props.option.values.map((value, index) => {
            return (
              <div 
                className="Product__option" 
                key={`${this.props.option.name}-${value}`}
                style={{border: activeIndex === index ? '1px solid white' : 'none'}}
              >
                <input 
                  type="checkbox" 
                  name={this.props.option.name} 
                  value={value}
                  onChange={this.props.handleOptionChange}
                  data-id={index}
                />
                <label>{`${value}`}</label>
              </div>
            )
          })}
        </fieldset>
      </div>
    );
  }
}

export default VariantSelector;
