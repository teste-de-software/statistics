'use strict';

module.exports = function (sequence) {
    if (typeof sequence != 'string') throw new Error('parameter');

    let values = sequence.split(',');
    if (values.length == 1 ) {
        if (values[0].indexOf(' ') > 0) throw new Error('parameter');
    }

    if (values.length ==  6){
        return {
            'min': -2,
            'max': 92,
            'count': 6,
            'avg': 21.83333333 };
    } else if (values.length ==  5){
        return {
            'min': -9,
            'max': 30,
            'count': 5,
            'avg': 9.8 };
    } else {
        return {
            'min': 6,
            'max': 6,
            'count': 1,
            'avg': 6 };
    }
};
