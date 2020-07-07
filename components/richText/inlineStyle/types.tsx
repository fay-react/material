/**
 * Create by fay on 2018-10-17 18:49
 */
import JiacuIcon from './icons/jiacu';
import ShanchuxianIcon from './icons/shanchuxian';
import ShangbiaoIcon from './icons/shangbiao';
import XiabiaoIcon from './icons/xiabiao';
import XiahuaxianIcon from './icons/xiahuaxian';
import XietiIcon from './icons/xieti';

export default [
    {title: '加粗', style:{}, type: 'BOLD', icon: JiacuIcon},
    {title: '斜体', style:{}, type: 'ITALIC', icon: XietiIcon},
    {title: '删除线', style:{}, type: 'STRIKETHROUGH', icon: ShanchuxianIcon},
    {title: '下划线', style:{}, type: 'UNDERLINE', icon: XiahuaxianIcon},
    {title: '上标', style:{}, type: 'sup', icon: ShangbiaoIcon},
    {title: '下标', style:{}, type: 'sub', icon: XiabiaoIcon},
];