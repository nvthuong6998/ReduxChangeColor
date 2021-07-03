import {CHANGE_BACKGROUND_COLOR} from './ChangeBackground.type'

const changBackgroundColor = (backgroundColor) => {
    return{
        type: CHANGE_BACKGROUND_COLOR
    }
}

export {changBackgroundColor}