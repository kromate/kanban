import { getAnalytics, logEvent } from 'firebase/analytics'

const analytics = getAnalytics()
logEvent(analytics, 'init')
