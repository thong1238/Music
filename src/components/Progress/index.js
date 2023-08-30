import classNames from 'classnames/bind';
import styles from './Progress.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Progress({ menu }) {
    const classes = cx('progress', { menu });
    return (
        <div className={classes}>
            {!menu ? (
                <span className={cx('current-start')}>00 : 00</span>
            ) : (
                <FontAwesomeIcon className={cx('shuffle')} icon={faShuffle} />
            )}
            <div className={cx('bar')}>
                <input readOnly type="range" id="seek" min="0" value="0" max="100" />
                <div className={cx('slider__progress')}></div>
            </div>
            {!menu ? (
                <span className={cx('current-end')}>00 : 00</span>
            ) : (
                <FontAwesomeIcon className={cx('repeat')} icon={faRepeat} />
            )}
        </div>
    );
}

export default Progress;
