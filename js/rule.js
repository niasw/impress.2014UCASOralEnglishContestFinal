/* Copyright 2014 Sun Sibai */
/* require d3 */
var graphR=d3.select('#svgRule').append('svg').attr('class','chart center').attr('width',780).attr('height',500);
graphR.append('ellipse').attr('class','nodes').attr('cx',120).attr('cy',60).attr('ry',55).attr('rx',110);
graphR.append('line').attr('class','nodes').attr('x1',235).attr('y1',60).attr('x2',305).attr('y2',60);
graphR.append('text').attr('class','nodes').attr('x',120).attr('y',76).text('Topic');
graphR.append('text').attr('class','nodes').attr('x',480).attr('y',76).text('Make a Difference');
graphR.append('ellipse').attr('class','nodes').attr('cx',120).attr('cy',210).attr('ry',55).attr('rx',110);
graphR.append('line').attr('class','nodes').attr('x1',235).attr('y1',210).attr('x2',285).attr('y2',210);
graphR.append('line').attr('class','nodes').attr('x1',325).attr('y1',190).attr('x2',285).attr('y2',210);
graphR.append('line').attr('class','nodes').attr('x1',325).attr('y1',230).attr('x2',285).attr('y2',210);
graphR.append('text').attr('class','nodes').attr('x',120).attr('y',220).text('Procedure');
graphR.append('text').attr('class','nodes').attr('x',480).attr('y',200).text('3min Speech');
graphR.append('text').attr('class','nodes').attr('x',480).attr('y',250).text('2~4min Q&A');
graphR.append('ellipse').attr('class','nodes').attr('cx',120).attr('cy',360).attr('ry',55).attr('rx',110);
graphR.append('text').attr('class','nodes').attr('x',120).attr('y',370).text('Criteria');
graphR.append('text').attr('class','nodes').attr('x',470).attr('y',320).text('演讲');
graphR.append('text').attr('class','nodes').attr('x',420).attr('y',380).text('才艺');
graphR.append('text').attr('class','nodes').attr('x',520).attr('y',380).text('人气');
graphR.append('text').attr('class','nodes').attr('x',480).attr('y',450).text('独立评分, 全评委给分均值为最终分数').attr('style','font-size:25pt;');


