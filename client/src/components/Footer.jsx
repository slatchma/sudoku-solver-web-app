import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

/**
 * @desc Footer of application
 */
const Footer = () => {
  const { t } = useTranslation();
    return (
        <div className='footer'>
            <Typography variant="subtitle1">
                {t('footer')}
            </Typography>
        </div>
    );
};

export default Footer;