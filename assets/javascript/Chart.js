import * as d3 from "d3";

class Chart {
  constructor(array) {
    this.data = array;
  }

  bar(
    selection,
    margin = { left: 50, right: 50, top: 50, bottom: 50 },
    attr1,
    attr2,
    colorizerFunc,
    xLabel
  ) {
    const width = selection.attr("width");
    const height = selection.attr("height");

    // CHART BOUNDS
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // CHART CONTAINER
    const g = selection.select("g");

    // AXIS CONTAINERS
    const yAxis = g.select(".y-axis");
    const xAxis = g.select(".x-axis");

    // VALUES
    const xValue = d => d[attr1];
    const yValue = d => d[attr2];

    const maxValue = d3.max(this.data, yValue);

    // SCALES
    const xScale = d3
      .scaleBand()
      .domain(this.data.map(xValue))
      .range([0, innerWidth])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([innerHeight, 0]);

    // RENDERS CHART RECTS

    let rect = g.selectAll("rect").data(this.data);
    rect.exit().remove();

    rect
      .enter()
      .append("rect")
      .merge(rect)
      .attr("fill", d => colorizerFunc(d))
      .attr("x", d => xScale(xValue(d)))
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("y", innerHeight)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 50)
      .ease(d3.easeBounce)
      .attr("y", d => yScale(yValue(d)))
      .attr("height", function(d) {
        return innerHeight - yScale(yValue(d));
      });
    // RENDER AXIS

    yAxis
      .transition()
      .duration(1000)
      .call(d3.axisLeft(yScale).ticks(maxValue));

    xAxis
      .attr("transform", `translate(0, ${innerHeight})`)
      .transition()
      .duration(1000)
      .call(d3.axisBottom(xScale));

    xAxis
      .selectAll(".x-axis-label")
      .data([null])
      .enter()
      .append("text")
      .attr("class", "x-axis-label")
      .attr("y", 45)
      .merge(xAxis.selectAll(".x-axis-label"))
      .attr("x", innerWidth / 2)
      .text(xLabel);

    xAxis
      .selectAll(".x-axis-label")
      .exit()
      .remove();
  }
}

export default Chart;
