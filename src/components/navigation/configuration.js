import TestTable from '../table/testTable'
import Hello from '../hello';
import Settings from '../settings/settings'
import Terms from '../terms/terms'

export default [
    {
        name: "Home",
        path: "home",
        component: Hello
    },
    {
        name: "Terms",
        path: "terms",
        component: Terms
    },
    {
        name: "Settings",
        path: "settings",
        component: Settings
    }
];