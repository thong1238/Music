import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Library.module.scss';

const cx = classNames.bind(styles);

function Library({ hide }) {
    return (
        <div className={cx('library')}>
            <h5>
                Thảo Minh <FontAwesomeIcon icon={faHeart} />
            </h5>
            {<FontAwesomeIcon onClick={() => hide()} className={cx('exit')} icon={faXmark} />}
            <h3>Playlist</h3>
            <ul className={cx('list-item')}>
                <div className={cx('item')}>
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>{' '}
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>
                    <div className={cx('plus')}>
                        <div className={cx('plus-sign')}>+</div>
                        <div className={cx('plus-title')}>Tạo playlist mới</div>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Library;
