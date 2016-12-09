import _ from 'lodash'
import $ from 'jquery'
import { TITLE } from 'i18n/I18nService'

let arr = [1, 2, 3]
let result = _.fill(arr, 'a')

export default function() {
    $('<h1/>').text(_.join(result, '--') + TITLE).appendTo('body')
}