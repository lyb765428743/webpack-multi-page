require('../css/test.less');
import png from '../img/file.png'

import $ from 'jquery'
$('img').prop('src',png);
$('img').click(function () {
  alert('hello world')
})