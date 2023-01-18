function sequenceBuilder(html) {
    const list = $(document).find('.lang-sequence');
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const chart = window.Diagram.parse(element.textContent);
        $(element).html(` <div id="sequence${index}"></div>`);
        drawSVG(chart, 'sequence' + index)
    }
    return html;
}

function drawSVG(chart, id) {
    chart.drawSVG(id,{theme: 'simple'});
}