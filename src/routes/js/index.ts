import express, { Application } from 'express';
import errorWrap from '../../utils/errorWrap';

const findPrime = (num: number) => {
    let i,
        primes = [2, 3],
        n = 5;
    const isPrime = (n: number) => {
        let i = 1,
            p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    };
    for (i = 2; i <= num; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    }
    return primes[num - 1];
};

const JS = (app: Application): void => {
    const router = express.Router();

    router.get(
        '/find-nth-prime/:number',
        errorWrap(async (req, res) => {
            const num = Number(req.params.number);

            var start = process.hrtime();
            const result = findPrime(num);
            var elapsedSeconds = process.hrtime(start)[0];
            var elapsedNano = process.hrtime(start)[1] / 1000000;

            res.send({
                prime: result,
                time: `${elapsedSeconds}s and ${elapsedNano.toFixed(3)}ms`,
            });
        })
    );

    app.use('/js', router);
};

export default JS;
