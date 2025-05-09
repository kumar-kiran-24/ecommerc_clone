import { useState } from 'react'

const questions = [
  { id: 1, question: 'How to purchase?', answer: 'Visit our online store...' },
  { id: 2, question: 'Warranty info', answer: '1 year limited warranty...' },
  { id: 3, question: 'Shipping details', answer: 'Worldwide shipping available...' },
]

function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="faq-section">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-container">
        {questions.map(({ id, question, answer }) => (
          <div key={id} className="faq-item">
            <div className="faq-question" onClick={() => setOpenId(openId === id ? null : id)}>
              {question}
              <span className="toggle-icon">{openId === id ? '-' : '+'}</span>
            </div>
            {openId === id && <div className="faq-answer">{answer}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ