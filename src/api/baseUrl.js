/**
 * Created by raviramamoorthy on 11/24/16.
 */

export default function getBaseUrl () {
    const inDevMode = window.location.hostname === 'localhost';
    return inDevMode ? 'http://localhost:3001/' : '/';
    
}
