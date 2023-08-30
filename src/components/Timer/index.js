import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Timer.module.scss';

const cx = classNames.bind(styles);

function Timer({ hide }) {
    return (
        <div className={cx('timer')}>
            <h5>Hẹn thời gian tắt</h5>
            {<FontAwesomeIcon onClick={() => hide()} className={cx('exit')} icon={faXmark} />}
            <ul className={cx('timeoff')}>
                <li>Sau 5 phút</li>
                <li>Sau 15 phút</li>
                <li>Sau 25 phút</li>
                <li>Sau 45 phút</li>
                <li>Sau 60 phút</li>
                <li>Sau 120 phút</li>
            </ul>
        </div>
    );
}

export default Timer;
