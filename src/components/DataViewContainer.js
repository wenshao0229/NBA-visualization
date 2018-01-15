import React from 'react';
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import { Radio, Row, Col, Switch, Icon } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayToolTips: true,
    }

    onCountSliderChange = (value) => {
        this.setState({minCount: value});
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        })
    }

    onTooltipChange = (checked) => {
        this.setState({
            displayToolTips: checked
        })
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    displayToolTips={this.state.displayToolTips}
                    minCount={this.state.minCount}
                    playerId={this.props.playerId}
                    chartType={this.state.chartType}
                />
                <div className="filters">
                    {this.state.chartType === 'hexbin' ? (
                        <CountSlider
                            minCount={this.state.minCount}
                            onCountSliderChange={_.debounce(this.onCountSliderChange, 300)}
                        />
                    ) : null}
                    <Row className="chart-type-radio">
                        <Col span={12} offset={3}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            Tooltip:{' '}
                            <Switch
                                onChange={this.onTooltipChange}
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}