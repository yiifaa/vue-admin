import _ from 'lodash'
import $ from 'jquery'
import { TITLE } from 'i18n/I18nService'
import Vue from 'vue'
import './index.less'
import appHeader from 'components/AppHeader'

let arr = [1, 2, 3]
let result = _.fill(arr, 'a')

let App = Vue.extend({
    template : `<div><H1 v-text="message"></H1><app-header></app-header></div>`,
    data () {
        return {
            message : 'Hello,World!'
        }
    },
    
    components : {
        appHeader
    }
})

export default App