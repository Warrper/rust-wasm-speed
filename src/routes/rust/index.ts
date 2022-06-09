import express, { Application } from 'express';
import errorWrap from '../../utils/errorWrap';
import { find_nth_prime } from 'node_primes';

const Rust = (app: Application): void => {
    const router = express.Router();

    router.get(
        '/find-nth-prime/:number',
        errorWrap(async (req, res) => {
            const num = Number(req.params.number);
            var start = process.hrtime();
            const result = find_nth_prime(num).toString();
            var elapsedSeconds = process.hrtime(start)[0];
            var elapsedNano = process.hrtime(start)[1] / 1000000;
            res.send({
                prime: result,
                time: `${elapsedSeconds}s and ${elapsedNano.toFixed(3)}ms`,
            });
        })
    );

    app.use('/rust', router);
};

export default Rust;
