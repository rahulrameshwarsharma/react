import React from 'react';
import useTheme from '../contexts/Theme';

function ThemeBtn() {

    const { themeMode, lightTheme, darkTheme } = useTheme();
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        }else {
            lightTheme();
        }
    };

    return (
        <div className='mainWrapper'>
            <label><input type="checkbox" value="" onChange={onChangeBtn} checked={themeMode === "dark"} /></label>
        </div>
    )
}

export default ThemeBtn
