
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus(data.message || 'Error sending message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let's connect for collaborations, freelance work, or creative conversations. I'm currently open to new opportunities.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-lg">Email Me</h3>
                <a href="mailto:pointbreaker2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  pointbreaker2004@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-lg">Location</h3>
                <p className="text-muted-foreground">Based in India, working globally.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gradient-to-br from-forest-light to-forest-dark p-8 md:p-12 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-foreground text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-forest-deep border border-forest-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-foreground text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-forest-deep border border-forest-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-foreground text-sm font-medium mb-2 block">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-forest-deep border border-forest-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground h-32 resize-none"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </div>
            {status && <p className="mt-4 text-sm text-center">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
