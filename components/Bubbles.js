import React, { Component } from 'react'
import CanvasJSReact from '../utils/canvasjs.react'
let CanvasJSChart = CanvasJSReact.CanvasJSChart
let dataPoints = []
 
class Bubbles extends Component {
	render() {
		const options = {
            animationEnabled: true,
            theme: "light1",
            axisX: {
                valueFormatString: 'MMM',
                lineColor: 'white',
                labelFontColor: 'white',
                tickColor: 'white',
                gridColor: 'white',
            },
            axisY: {
                lineColor: 'white',
                labelFontColor: 'white',
                tickColor: 'white',
                gridColor: 'white',
                maximum: 50,
                minimum: -10
            },
            data: [{
                type: "bubble",
                indexLabel: "{label}",
                toolTipContent: "<b>{label}</b><br>Date Started: {x}<br>Time Spent: {time} mins.<br>POMs: {y}",
                dataPoints: dataPoints
            }]
        }
		
		return (
			<CanvasJSChart options = {options} onRef={ref => this.chart = ref} />
		)
    }

    componentDidMount(){
        var chart = this.chart
        this.props.projects.forEach(project => {
            dataPoints.push({
                label: project.label,
                x: new Date(project.createdAt),
                y: project.poms,
                z: project.poms,
                time: project.poms * 25
            })
        })
        chart.render()
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.projects.length !== prevProps.projects.length || this.props.poms.length !== prevProps.poms.length) {
            var chart = this.chart
            chart.update()
        }
    }
}

export default Bubbles