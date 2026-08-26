import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { OrnateFrame } from './OrnateFrame';
import { EvilEyeBadge } from './EvilEyeBadge';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Maximize2,
  X,
  Camera,
  Layers,
  Smile,
} from 'lucide-react';
import { playPop, playSparkle, startBackgroundMusic } from '../utils/audio';

interface PhotoMemory {
  id: number;
  tag: string;
  date: string;
  title: string;
  caption: string;
  note: string;
  emoji: string;
  gradient: string;
  accent: string;
  sticker: string;
}

const GALLERY_PHOTOS: PhotoMemory[] = [
  {
    id: 1,
    tag: 'Chapter 01',
    date: 'Childhood Days',
    title: 'The Great Snack & Pizza Heists 🍕',
    caption: '"Stealing each other’s food and pretending the dog did it."',
    note: 'From arguing over the biggest cookie to saving the last slice of pizza for each other, our food wars are legendary!',
    emoji: '🍕',
    gradient: 'from-blue-600 via-sky-500 to-indigo-600',
    accent: 'bg-amber-100 text-amber-800 border-amber-300',
    sticker: '🧿',
  },
  {
    id: 2,
    tag: 'Chapter 02',
    date: 'Late Nights',
    title: 'Midnight Maggi & Life Talks 🌙',
    caption: '"Sharing secrets when the whole world was fast asleep."',
    note: 'Those spontaneous 2 AM conversations about life, dreams, fears, and hilarious gossip that only we understand.',
    emoji: '🍜',
    gradient: 'from-indigo-700 via-blue-600 to-sky-500',
    accent: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    sticker: '✨',
  },
  {
    id: 3,
    tag: 'Chapter 03',
    date: 'Everyday Mischief',
    title: 'Partners in Crime & Silly Roasts 😂',
    caption: '"Nobody can roast you better, and nobody will protect you more."',
    note: 'Teasing each other till tears roll down from laughing so hard. Our shared humor is unmatched anywhere in the world!',
    emoji: '🎉',
    gradient: 'from-sky-500 via-blue-600 to-cyan-600',
    accent: 'bg-sky-100 text-sky-800 border-sky-300',
    sticker: '🌸',
  },
  {
    id: 4,
    tag: 'Chapter 04',
    date: 'Unspoken Bond',
    title: 'Lifelong Shield & Guardian 🛡️',
    caption: '"Always having your back, no questions asked."',
    note: 'Whenever life gets tough or confusing, knowing you have my back gives me all the strength in the world.',
    emoji: '🛡️',
    gradient: 'from-blue-700 via-sky-600 to-blue-500',
    accent: 'bg-blue-100 text-blue-800 border-blue-300',
    sticker: '🤍',
  },
  {
    id: 5,
    tag: 'Chapter 05',
    date: 'Forever & Always',
    title: 'Best Brother In The Whole Universe 🏆',
    caption: '"Certified 100% genuine, loving, and irreplaceable brother."',
    note: 'Growing up with you by my side is one of the greatest blessings. Here is to a lifetime of more memories and celebrations!',
    emoji: '💙',
    gradient: 'from-blue-600 via-sky-400 to-indigo-700',
    accent: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    sticker: '🧿',
  },
];

interface MemoriesScreenProps {
  onNext: () => void;
}

export const MemoriesScreen: React.FC<MemoriesScreenProps> = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMemory | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [likedPhotos, setLikedPhotos] = useState<Record<number, boolean>>({});

  const handleNextPhoto = () => {
    playPop();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const handlePrevPhoto = () => {
    playPop();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNextPhoto();
    } else if (info.offset.x > swipeThreshold) {
      handlePrevPhoto();
    }
  };

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    playSparkle();
    setLikedPhotos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNextScreen = () => {
    startBackgroundMusic();
    playPop();
    playSparkle();
    onNext();
  };

  const currentPhoto = GALLERY_PHOTOS[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] w-full px-2 sm:px-4 md:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl"
      >
        <OrnateFrame>
          <div className="flex flex-col items-center py-2 sm:py-5">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-5 py-2 rounded-full bg-blue-100/90 text-blue-900 border border-blue-300 shadow-sm inline-flex items-center gap-2 mb-2 sm:mb-3"
            >
              <Camera className="w-4 h-4 text-blue-600" />
              <span className="font-fredoka font-semibold text-sm sm:text-base tracking-wide uppercase">
                Special Moments Gallery
              </span>
              <EvilEyeBadge size={20} />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 font-fredoka leading-tight tracking-tight px-2"
            >
              Our Cherished Memories <span className="inline-block text-blue-600">🤍💙</span>
            </motion.h1>

            {/* Subtitle / Interaction Instructions */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-base sm:text-xl font-medium text-slate-600 font-outfit max-w-xl"
            >
              Swipe, tap, or browse the photo carousel below to relive our journey 📸✨
            </motion.p>

            {/* Main Interactive Swipeable Polaroid Carousel Frame */}
            <div className="relative my-6 sm:my-8 w-full max-w-lg mx-auto flex items-center justify-center">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
                className="absolute -left-3 sm:-left-6 md:-left-8 z-20 p-3 sm:p-4 rounded-full bg-white text-blue-700 shadow-xl border-2 border-blue-200 hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Swipeable Polaroid Card Container */}
              <div className="w-full relative px-2">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentPhoto.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 80 : -80,
                      scale: 0.92,
                      rotate: direction > 0 ? 3 : -3,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -80 : 80,
                      scale: 0.92,
                      rotate: direction > 0 ? -3 : 3,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={handleDragEnd}
                    className="touch-pan-y cursor-grab active:cursor-grabbing select-none bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-blue-200 text-left relative overflow-hidden"
                  >
                    {/* Washi Tape / Decorative Top Clip */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-blue-200/80 backdrop-blur-md rounded-sm transform -rotate-1 border border-white shadow-sm pointer-events-none z-10 flex items-center justify-center">
                      <span className="text-[10px] font-fredoka font-bold text-blue-800 tracking-wider uppercase">
                        MEMORIES 💙
                      </span>
                    </div>

                    {/* Top Header inside Card */}
                    <div className="flex items-center justify-between mt-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-fredoka border ${currentPhoto.accent}`}>
                          {currentPhoto.tag}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-400 font-outfit">
                          {currentPhoto.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Favorite Heart Button */}
                        <button
                          onClick={(e) => handleLike(currentPhoto.id, e)}
                          title="Heart this memory"
                          className="p-1.5 rounded-full hover:bg-blue-50 transition-all active:scale-90"
                        >
                          <Heart
                            className={`w-5 h-5 transition-colors ${
                              likedPhotos[currentPhoto.id]
                                ? 'fill-blue-600 text-blue-600 scale-110 animate-bounce'
                                : 'text-slate-400 hover:text-blue-500'
                            }`}
                          />
                        </button>

                        {/* Expand Photo Modal Button */}
                        <button
                          onClick={() => {
                            playPop();
                            setSelectedPhoto(currentPhoto);
                          }}
                          title="View Full Story"
                          className="p-1.5 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Visual Photo Area */}
                    <div
                      onClick={() => {
                        playPop();
                        setSelectedPhoto(currentPhoto);
                      }}
                      className={`w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-tr ${currentPhoto.gradient} p-6 flex flex-col items-center justify-center text-white relative shadow-inner overflow-hidden cursor-pointer group`}
                    >
                      {/* Floating glowing background aura */}
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:scale-105 transition-transform duration-500" />
                      
                      {/* Big Interactive Emoji Mascot */}
                      <div className="relative z-10 text-6xl sm:text-7xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {currentPhoto.emoji}
                      </div>

                      {/* Photo Title Overlay */}
                      <div className="relative z-10 font-fredoka font-bold text-lg sm:text-xl md:text-2xl text-center drop-shadow-md text-white px-2">
                        {currentPhoto.title}
                      </div>

                      {/* Corner Sticker Badge */}
                      <div className="absolute bottom-2 right-2 text-2xl animate-bounce">
                        {currentPhoto.sticker}
                      </div>
                    </div>

                    {/* Captions & Heartwarming Message */}
                    <div className="mt-4 space-y-1.5">
                      <p className="font-fredoka font-bold text-base sm:text-lg text-blue-950">
                        {currentPhoto.caption}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-outfit leading-relaxed">
                        {currentPhoto.note}
                      </p>
                    </div>

                    {/* Bottom Tap to Swipe Indicator */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Swipe or tap arrows</span>
                      </span>
                      <span className="font-fredoka font-bold text-slate-400">
                        {currentIndex + 1} of {GALLERY_PHOTOS.length}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNextPhoto}
                aria-label="Next photo"
                className="absolute -right-3 sm:-right-6 md:-right-8 z-20 p-3 sm:p-4 rounded-full bg-white text-blue-700 shadow-xl border-2 border-blue-200 hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Gallery Filmstrip / Thumbnail Selector */}
            <div className="w-full max-w-md mx-auto mb-6 px-2">
              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2">
                {GALLERY_PHOTOS.map((photo, idx) => {
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => {
                        playPop();
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`relative flex flex-col items-center p-2 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-110 -translate-y-1'
                          : 'bg-white border-blue-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{photo.emoji}</span>
                      <span className="text-[10px] font-fredoka font-bold mt-0.5 whitespace-nowrap">
                        #{idx + 1}
                      </span>
                      {likedPhotos[photo.id] && (
                        <span className="absolute -top-1.5 -right-1 text-xs">💙</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Large Prominent NEXT Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleNextScreen}
              className="px-12 py-5 sm:px-16 sm:py-6 text-2xl sm:text-3xl font-black font-fredoka text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 rounded-full shadow-xl shadow-blue-500/40 hover:shadow-blue-600/60 transition-all cursor-pointer flex items-center gap-3 border-2 border-white/60"
            >
              <span>NEXT</span>
              <span className="text-3xl">→</span>
            </motion.button>
          </div>
        </OrnateFrame>
      </motion.div>

      {/* Full Photo Modal / Deep Inspection Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-blue-300 text-left overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100 transition-all cursor-pointer border border-blue-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Top Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold font-fredoka border ${selectedPhoto.accent}`}>
                  {selectedPhoto.tag}
                </span>
                <span className="text-sm font-semibold text-slate-500 font-outfit">
                  {selectedPhoto.date}
                </span>
              </div>

              {/* Modal Visual Area */}
              <div
                className={`w-full h-52 sm:h-60 rounded-2xl bg-gradient-to-tr ${selectedPhoto.gradient} p-6 flex flex-col items-center justify-center text-white relative shadow-inner`}
              >
                <div className="text-7xl sm:text-8xl mb-3 animate-bounce">
                  {selectedPhoto.emoji}
                </div>
                <h3 className="font-fredoka font-bold text-2xl text-center text-white drop-shadow-md">
                  {selectedPhoto.title}
                </h3>
              </div>

              {/* Modal Detailed Story Note */}
              <div className="mt-5 space-y-3">
                <p className="font-fredoka font-bold text-lg text-blue-900">
                  {selectedPhoto.caption}
                </p>
                <p className="text-base text-slate-700 font-outfit leading-relaxed">
                  {selectedPhoto.note}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={(e) => handleLike(selectedPhoto.id, e)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-fredoka font-bold text-sm hover:bg-blue-100 transition-all border border-blue-200"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedPhotos[selectedPhoto.id] ? 'fill-blue-600 text-blue-600' : 'text-blue-600'
                    }`}
                  />
                  <span>{likedPhotos[selectedPhoto.id] ? 'Cherished 💙' : 'Love This Memory'}</span>
                </button>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2 rounded-full bg-blue-600 text-white font-fredoka font-bold text-sm hover:bg-blue-700 transition-all shadow-md"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
