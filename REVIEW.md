# Review

## Security
In general, all the code is well ordered, however you can address some security issues, such as method validation and protection, this can be achieved by using ``mdg-validated-method``, _i.e.,_

```JSX
import {ValidatedMethod} from 'meteor/mdg:validated-method';

export const exampleMethod = new ValidatedMethod({
    name: 'validated.method',
    validate: () => { }, // Some validation function
    run(params) {
        // Code to execute
    }
});
```
## Testing
Do not forget to add client and ui tests, they are important on web contexts.