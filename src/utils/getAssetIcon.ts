import {icons} from '../AssetsIcons/icons'

export const getAssetIcon = (id : string) => {

    const uri = icons.find((asset)=> asset.asset_id === id)?.url

    if (uri) {
        return uri
    }
    else {
        return 'https://cdn-icons-png.flaticon.com/512/5219/5219370.png'
    }

}