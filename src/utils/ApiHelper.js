import * as CommonConstants from '../common/CommonConstants'

/**
 * fetches OKR data from API.
 * @returns
 */
export const fetchOKRs = () =>
  new Promise((resolve, reject) => {
    fetch(CommonConstants.API_URL)
      .then(res => res.json())
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
