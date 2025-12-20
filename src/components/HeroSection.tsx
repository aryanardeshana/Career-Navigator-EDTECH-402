import { motion } from 'framer-motion';
import { Upload, Route, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import WaveBackground from './WaveBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <WaveBackground />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 pb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-pale border border-secondary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Intelligence</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">AI Career Navigator</span>
              <br />
              <span className="gradient-text">From Resume to Real Employment</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Your personal AI mentor guiding you from resume creation to job success. 
              Get ATS-optimized resumes, skill gap analysis, and personalized career paths.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#resume-screen"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Upload className="w-5 h-5" />
                Upload Resume
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#career-path"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Route className="w-5 h-5" />
                Build Career Path
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '95%', label: 'ATS Pass Rate' },
                { value: '10K+', label: 'Careers Launched' },
                { value: '85%', label: 'Job Match Accuracy' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid gap-4">
              {/* Main Feature Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card-hover p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Smart ATS Analysis</h3>
                    <p className="text-muted-foreground">
                      AI-powered resume screening that evaluates your resume against ATS criteria 
                      and provides actionable improvement suggestions.
                    </p>
                  </div>
                </div>
                
                {/* Score Preview */}
                <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">ATS Compatibility Score</span>
                    <span className="text-lg font-bold text-secondary">87%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                      className="h-full gradient-accent-bg rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Secondary Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card-hover p-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-pale flex items-center justify-center mb-4">
                    <Route className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-1">Skill Gap Analysis</h4>
                  <p className="text-sm text-muted-foreground">Identify missing skills and get personalized learning paths</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card-hover p-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-pale flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-1">Career Projection</h4>
                  <p className="text-sm text-muted-foreground">Visualize salary growth and progression paths</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
