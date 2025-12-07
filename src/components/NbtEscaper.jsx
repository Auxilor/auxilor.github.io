import React, { useState } from 'react';
import styles from './NbtEscaper.module.css';

export default function NbtEscaper() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [copied, setCopied] = useState(false);

    const escapeNbt = () => {
        if (!input.trim()) {
            setOutput('');
            return;
        }
        const escaped = JSON.stringify(input);
        setOutput(escaped);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const clearFields = () => {
        setInput('');
        setOutput('');
        setCopied(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputSection}>
                <label className={styles.label}>
                    NBT String
                    <span className={styles.hint}>
            Example Input: {'{'}id:"minecraft:potion",Count:1b,tag:{'{'}Potion:"minecraft:night_vision"{'}'}{'}'}
          </span>
                </label>
                <textarea
                    className={styles.textarea}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter your raw NBT string here...'
                    rows={4}
                />
            </div>

            <div className={styles.buttonGroup}>
                <button
                    className={styles.button}
                    onClick={escapeNbt}
                    disabled={!input.trim()}
                >
                    Prepared String for YML Config
                </button>
                <button
                    className={styles.buttonSecondary}
                    onClick={clearFields}
                    disabled={!input && !output}
                >
                    Clear
                </button>
            </div>

            {output && (
                <div className={styles.outputSection}>
                    <div className={styles.labelRow}>
                        <label className={styles.label}>Config-Ready NBT String (eco-compatible)</label>
                        <button
                            className={styles.copyButton}
                            onClick={copyToClipboard}
                        >
                            {copied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                    <textarea
                        className={styles.textarea}
                        value={output}
                        readOnly
                        rows={4}
                    />
                </div>
            )}
        </div>
    );
}