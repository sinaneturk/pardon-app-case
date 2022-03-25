import {AiFillCaretDown} from 'react-icons/ai'

function DropDownLocal({local, updateLocal,local_vocab}){

    let dropDownClasses = local.dropDownStatus ? "drop-down-locals dd-visible" : "drop-down-locals dd-hidden"
    return (
        <div className="local-container">
            <div className="drop-name-icon-container">
            <p className="local-name" >{local.lang}</p>
            <AiFillCaretDown 
            className="local-dropdown" 
            color="#e1f5de" 
            size={20} 
            onClick={()=>updateLocal({dropDownStatus:!local.dropDownStatus})}/>
            </div>
            <div className={dropDownClasses} >
                <button onClick={()=>updateLocal({lang:'TR',dropDownStatus:!local.dropDownStatus})} className="drop-down-local-option">{local_vocab.TR_lang}</button>
                <button onClick={()=>updateLocal({lang:'EN',dropDownStatus:!local.dropDownStatus})} className="drop-down-local-option">{local_vocab.EN_lang}</button>
            </div>
        </div>
    )
}

export default DropDownLocal