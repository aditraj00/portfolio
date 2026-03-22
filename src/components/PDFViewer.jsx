import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink } from 'lucide-react'
import CVPdf from '../assets/Adit\'s  CV.pdf'

export default function PDFViewer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-screen w-full md:w-96 bg-[#0E0E0E] border-l border-yellow-600/30 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-yellow-600/30 flex items-center justify-between">
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#FFD700' }}>
                My CV
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-yellow-600/10 rounded-lg transition"
                aria-label="Close PDF viewer"
              >
                <X size={20} color="#FFD700" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={CVPdf}
                className="w-full h-full border-none"
                title="CV PDF Viewer"
              />
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-yellow-600/30 flex gap-3">
              <a
                href={CVPdf}
                download="Adit-Raj-CV.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-600 text-black font-semibold hover:bg-yellow-500 transition"
              >
                <Download size={18} />
                Download
              </a>
              <a
                href="/src/assets/Adit's%20%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-yellow-600/50 text-yellow-400 font-semibold hover:bg-yellow-600/10 transition"
              >
                <ExternalLink size={18} />
                Open
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
