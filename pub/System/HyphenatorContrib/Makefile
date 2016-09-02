FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=hyphenator.js

PKG_SOURCE= Hyphenator.js hyphenator.init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

hyphenator.uncompressed.js: $(PKG_SOURCE)
	@echo generating $@
	@cat $^ > $@

clean:
	rm *.gz $(TARGET)
