'use client';

import { useState, useEffect } from 'react';

export default function Prelander() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState({ debt: '', zip: '' });
  const [location, setLocation] = useState('your area');

  // 🔥 ADD YOUR LINKS HERE
  const LOW_DEBT_URL = "https://your-low-debt-url.com";
  const HIGH_DEBT_URL = "https://your-high-debt-offer.com";
  const REDTRACK_URL = "";

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data?.country_code === 'US') {
          if (data?.region) setLocation(data.region);
          else if (data?.city) setLocation(data.city);
        } else {
          setLocation('your area');
        }
      })
      .catch(() => setLocation('your area'));
  }, []);

  useEffect(() => {
    setProgress((step / 3) * 100);
  }, [step]);

  const next = () => setStep((prev) => prev + 1);

  const selectOption = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setTimeout(() => next(), 350);
  };

  const isValidZip = (zip) => /^\d{5}$/.test(zip);

  const getRedirectUrl = () => {
    if (REDTRACK_URL) return REDTRACK_URL;

    const debt = answers.debt;

    if (debt === "$5,000 - $10,000") return LOW_DEBT_URL;
    if (debt === "$10,000 - $25,000") return HIGH_DEBT_URL;
    if (debt === "$25,000+") return HIGH_DEBT_URL;

    return HIGH_DEBT_URL;
  };

  const handleZip = () => {
    if (!isValidZip(answers.zip)) {
      alert('Please enter a valid 5-digit ZIP code');
      return;
    }
    next();
    setTimeout(() => {
      window.location.href = getRedirectUrl();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="font-semibold">Verified Relief Network</span>
          </div>
          <span className="text-xs">Secure • Trusted • Updated Today</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT */}
          <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Debt Relief Options Available in {location}
            </h2>
            <h3 className="text-3xl font-extrabold text-green-600 mb-4">
              Check If You Qualify for Up to $50,000
            </h3>
            <p className="text-gray-500 mb-6">
              Takes less than 30 seconds. No impact on your credit score.
            </p>

            <div className="space-y-2 text-sm">
              <p>✅ 12,482 Americans approved this month</p>
              <p>🔒 Secure & confidential</p>
              <p>⭐ Rated 4.8/5 based on user reviews</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-6 md:p-8">

            {/* MOBILE HEADER */}
            <div className="md:hidden mb-4 text-center">
              <h1 className="text-lg font-bold text-gray-800">
                Debt Relief Options in {location}
              </h1>
              <p className="text-xs text-gray-500">
                Takes less than 30 seconds • Free check
              </p>
            </div>

            {/* PROGRESS */}
            {step > 0 && (
              <div className="w-full bg-gray-200 h-2 rounded mb-5">
                <div
                  className="bg-green-500 h-2 rounded transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* STEP 0 */}
            {step === 0 && (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-3">
                  Start Free Eligibility Check
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  Takes less than 30 seconds • No impact on credit score
                </p>

                <button
                  onClick={next}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
                >
                  Start Now →
                </button>

                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-gray-600">
                  <div className="bg-gray-100 py-2 rounded">🔒 Secure</div>
                  <div className="bg-gray-100 py-2 rounded">⚡ Fast</div>
                  <div className="bg-gray-100 py-2 rounded">100% Free</div>
                </div>

                <div className="mt-5 space-y-2">
                  {[{
                    name: 'Michael R.', state: 'Texas', text: 'Lowered my payments fast.', img: 'https://ui-avatars.com/api/?name=Michael+R&background=0D8ABC&color=fff'
                  }, {
                    name: 'Sarah L.', state: 'California', text: 'Didn’t expect to qualify—worked.', img: 'https://ui-avatars.com/api/?name=Sarah+L&background=16A34A&color=fff'
                  }].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                      <img src={t.img} className="w-8 h-8 rounded-full" />
                      <div className="text-xs text-left">
                        <div className="text-yellow-500">★★★★★</div>
                        <p>“{t.text}”</p>
                        <div className="font-semibold">— {t.name}, {t.state}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-gray-400 mt-3">
                  Join thousands checking eligibility today
                </p>
              </div>
            )}

            {/* STEP 1 (DEBT NOW) */}
            {step === 1 && (
              <div>
                <h2 className="font-semibold mb-3 text-center">How much debt do you currently have?</h2>
                <div className="space-y-2">
                  {["$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]
                    .map((val) => (
                      <button key={val} onClick={() => selectOption('debt', val)} className="w-full border py-2 rounded-lg">{val}</button>
                    ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="text-center">
                <h2 className="font-semibold mb-3">Enter Your ZIP Code</h2>
                <input
                  value={answers.zip}
                  onChange={(e) => setAnswers({ ...answers, zip: e.target.value.replace(/[^0-9]/g, '').slice(0,5) })}
                  className="w-full border p-3 rounded mb-3 text-center"
                />
                <button onClick={handleZip} className="w-full bg-green-500 text-white py-3 rounded">Check Now →</button>
              </div>
            )}

            {/* RESULT */}
            {step === 3 && (
              <div className="text-center">
                <h2 className="text-green-600 font-bold">🎉 You May Qualify!</h2>
                <button onClick={() => window.location.href = getRedirectUrl()} className="w-full bg-green-600 text-white py-3 rounded mt-4">Continue →</button>
              </div>
            )}

          </div>
        </div>

        {/* FOOTER */}
        <div className="text-xs text-center mt-6 space-x-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/disclosure">Disclosure</a>
        </div>

      </div>
    </div>
  );
}
