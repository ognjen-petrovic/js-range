class Range
{
    constructor(p)
    {
        this._a = [];
        if (Array.isArray(p))
        {
            this._array2Range(p);
        }
        else if (this._isRangeObject(p))
        {
            this._object2Range(p);
        }
    }

    _array2Range(p)
    {
        for (let i = 0; i < p.length; ++i)
        {
            if (isNaN(p[i]) == false)
            {
                this._a.push(p[i]);
            }
            else if (Array.isArray(p[i]))
            {
                this._array2Range(p[i]);
            }
            else if (this._isRangeObject(p[i]))
            {
                this._object2Range(p[i]);
            }
        }
    }

    _object2Range(o)
    {
        let step = ('step' in o) ? o.step : this._getRangeStep(o.from, o.to);
        if (o.from > o.to)
        {
            for (let n = o.from, to = o.to; n >= to; n = Math.round((n + step) * 1e12) / 1e12)
            {
                this._a.push(n);
            }
        }
        else
        {
            for (let n = o.from, to = o.to; n <= to; n = Math.round((n + step) * 1e12) / 1e12)
            {
                this._a.push(n);
            }
        }
    }


    _isRangeObject(o)
    {
        return ('from' in o) && ('to' in o);
    }

    _getNumPrecision(num)
    {
        let a = (num + '').split('.');
        if (a.length == 1)
        {
            return 1;
        }
        else
        {
            return Math.pow(10, -a[1].length);
        }
    }

    _getRangeStep(from, to)
    {
        let step = Math.min(this._getNumPrecision(from), this._getNumPrecision(to));
        if (from > to)
        {
            step = step * -1;
        } 

        return step;
    }

    toString()
    {
        return JSON.stringify(this._a);
    }

    toArray()
    {
        return this._a;
    }
}

if (typeof module !== 'undefined' && ('exports' in module))
{
    module.exports = Range;
}