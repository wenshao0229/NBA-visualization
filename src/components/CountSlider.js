import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 2,
    }

    onChange = (value) => {
        let input = isNaN(Number(value)) ? 2 : value
        this.setState({
            inputValue: input
        });
        this.props.onCountSliderChange(input);
    }

    render() {
        return (
            <Row>
                <Col span={12} offset={3}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={this.state.inputValue}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{marginLeft: 16}}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}