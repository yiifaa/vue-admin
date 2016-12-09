import _ from 'lodash'
import $ from 'jquery'

let arr = [1, 2, 3]
let result = _.fill(arr, 'a')

export default function() {
    $('body').text(_.join(result, '--'))
}